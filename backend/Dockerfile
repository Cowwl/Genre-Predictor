FROM python:3.9-slim-bullseye

WORKDIR /app

COPY ./ /app/src

COPY ./requirements.txt /app/requirements.txt

RUN pip3 install --no-cache-dir -r /app/requirements.txt

RUN pip3 install fastai --upgrade --no-cache-dir

RUN apt-get update -y && apt-get install -y --no-install-recommends build-essential gcc \
                                        libsndfile1 

CMD ["python", "src/main.py", "--host=127.0.0.1", "--port=8000"]