/** Human-readable age from a date of birth. */
export function formatAgeFromDob(
  dobIso: string,
  now: Date = new Date(),
): string {
  const dob = new Date(`${dobIso}T00:00:00`);
  if (Number.isNaN(dob.getTime()) || now < dob) {
    return "on the way";
  }

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0 && months === 0) {
    if (days === 0) return "born today";
    if (days === 1) return "1 day old";
    return `${days} days old`;
  }

  if (years === 0) {
    return months === 1 ? "1 month old" : `${months} months old`;
  }

  if (months === 0) {
    return years === 1 ? "1 year old" : `${years} years old`;
  }

  const yearPart = years === 1 ? "1 year" : `${years} years`;
  const monthPart = months === 1 ? "1 month" : `${months} months`;
  return `${yearPart}, ${monthPart} old`;
}
