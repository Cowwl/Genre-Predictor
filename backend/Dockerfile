FROM python:3.9-slim

COPY ./ /app/src
COPY ./requirements.txt /app

WORKDIR /app

RUN pip3 install -r requirements.txt

RUN pip3 install fastai --upgrade

EXPOSE 8000

CMD ["uvicorn", "src.main:app", "--host=0.0.0.0", "--reload"]