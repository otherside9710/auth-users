export function decodeBase64(base64String: string): string {
  const decodedString = Buffer.from(base64String, 'base64').toString('utf-8');
  return decodedString;
}
