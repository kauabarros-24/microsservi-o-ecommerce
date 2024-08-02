import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['causal-manatee-12635-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'Y2F1c2FsLW1hbmF0ZWUtMTI2MzUkQ_oLsAg7dW5RuTsG8fwS0c1S91_YgIZqAcE',
      password: 'MzFkY2FhZWMtOTc5Zi00MmQ4LTk4OWUtM2IwOTM0Y2M0NTJm'
  },
  logLevel: logLevel.ERROR,
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
      topic: 'YOUR_TOPIC',
      messages: [
      { value: 'Hello Kafka!' },
      ],
  });

  console.log("Message sent successfully");
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));

export {kafka}