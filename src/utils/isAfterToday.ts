export default function (date: string | Date) {
  return new Date(date) <= new Date();
}
