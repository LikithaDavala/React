const STUDENTS_URL = 'https://api.elurucoders.online/api/students';

async function request(url, options) {
  const response = await fetch(url, options);
  const result = await response.json();

  if (!response.ok || result.success === false) {
    throw new Error(result.error || result.message || 'The request could not be completed.');
  }

  return result;
}

export function getStudents() {
  return request(STUDENTS_URL);
}

export function createStudent(student) {
  return request(STUDENTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
}

export function updateStudent(id, student) {
  return request(`${STUDENTS_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
}

export function deleteStudent(id) {
  return request(`${STUDENTS_URL}/${id}`, { method: 'DELETE' });
}