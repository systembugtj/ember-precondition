export default function errorBuilder(code, message) {
  code = code || 1;
  message = message || "Oops, unknown error is reported.";
  let error = new Error(message);
  error.code = code;
  return error;
}
