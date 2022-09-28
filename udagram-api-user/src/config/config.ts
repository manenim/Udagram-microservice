export const config = {
  'username': process.env.POSTGRES_USERNAME || "postgres",
  'password': process.env.POSTGRES_PASSWORD || "manex1234",
  'database': process.env.POSTGRES_DB || "postgres",
  'host': process.env.POSTGRES_HOST  || "database-1.cwjgpzujas2h.us-east-1.rds.amazonaws.com",
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION || "us-east-1",
  'aws_profile': process.env.AWS_PROFILE || "default",
  'aws_media_bucket': process.env.AWS_BUCKET || "my-microservice-bucket-9800-1293-9854",
  'url': process.env.URL || "http://localhost:8100",
  'jwt': {
    'secret': process.env.JWT_SECRET || "testing",
  },
};
