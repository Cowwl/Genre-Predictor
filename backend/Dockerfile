FROM python:3.9-slim

COPY ./ /app/

COPY ./requirements.txt /app

WORKDIR /app

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# 
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]