import { s3 } from 'utils';

export const getImageUrl = key =>
  `https://${s3.bucketName}.s3.${s3.region}.amazonaws.com/${key}`;
