from fastapi import FastAPI
from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

class Message(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    message: str


sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url, echo=True)


app = FastAPI()
SQLModel.metadata.create_all(engine)
session = Session(engine)
app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

@app.get("/{message}")
async def reverse_message(message: str):
    reversed = message [::-1]
    message_to_store = Message(message=reversed)
    session.add(message_to_store)
    session.commit()
    return reversed


@app.get("/message/{message_id}")
async def get_message(message_id: int):
    with Session(engine) as session:
        results = session.exec(select(Message).where(Message.id == message_id))
        result = results.first()
        if result is None:
            return "No matches found!"
        return result
