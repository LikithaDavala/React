import { useEffect, useState } from 'react';
import { createStudent, deleteStudent, getStudents, updateStudent } from '../api/students';
import './students.css';

const EMPTY_FORM = { name: '', email: '', phone: '' };

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  async function loadStudents() {
    setLoading(true);
    setError('');
    try {
      const result = await getStudents();
      setStudents(result.data || []);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    try {
      if (editingId) {
        await updateStudent(editingId, form);
        setNotice('Student details updated.');
      } else {
        await createStudent(form);
        setNotice('Student added.');
      }
      setForm(EMPTY_FORM);
      setEditingId(null);
      await loadStudents();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(student) {
    setForm({ name: student.name, email: student.email, phone: student.phone });
    setEditingId(student._id);
    setError('');
    setNotice('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(student) {
    if (!window.confirm(`Delete ${student.name}? This cannot be undone.`)) {
      return;
    }

    setError('');
    setNotice('');
    try {
      await deleteStudent(student._id);
      setStudents((currentStudents) => currentStudents.filter((item) => item._id !== student._id));
      if (editingId === student._id) {
        setForm(EMPTY_FORM);
        setEditingId(null);
      }
      setNotice('Student deleted.');
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  function cancelEdit() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setError('');
    setNotice('');
  }

  return (
    <main className="students-page">
      <div className="students-shell">
        <header className="students-header">
          <div>
            <p className="students-kicker">RECORDS / DIRECTORY</p>
            <h1>Students</h1>
            <p className="students-subtitle">Manage student contact details.</p>
          </div>
          <div className="student-count" aria-live="polite">
            <span>{students.length}</span> {students.length === 1 ? 'student' : 'students'}
          </div>
        </header>

        <section className="student-form-section" aria-labelledby="student-form-title">
          <div className="section-heading">
            <span className="section-index">01</span>
            <h2 id="student-form-title">{editingId ? 'Edit student' : 'Add a student'}</h2>
          </div>
          <form className="student-form" onSubmit={handleSubmit}>
            <div className="student-fields">
              <label className="student-field">
                <span>Full name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Jordan Lee"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="student-field">
                <span>Email address</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jordan@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="student-field">
                <span>Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 555 123 4567"
                  autoComplete="tel"
                  required
                />
              </label>
            </div>
            <div className="student-form-actions">
              {editingId && (
                <button className="student-button student-button-secondary" type="button" onClick={cancelEdit}>
                  Cancel
                </button>
              )}
              <button className="student-button student-button-primary" type="submit" disabled={saving}>
                {saving ? 'Saving...' : editingId ? 'Save changes' : 'Add student'}
              </button>
            </div>
          </form>
          {error && <p className="student-message student-message-error" role="alert">{error}</p>}
          {notice && <p className="student-message student-message-success" role="status">{notice}</p>}
        </section>

        <section className="student-list-section" aria-labelledby="student-list-title">
          <div className="section-heading student-list-heading">
            <span className="section-index">02</span>
            <h2 id="student-list-title">Student directory</h2>
            <button className="student-refresh" type="button" onClick={loadStudents} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
          <div className="student-table-wrap">
            <table className="student-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col" className="student-actions-heading">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td className="student-empty" colSpan="4">Loading student records...</td></tr>
                ) : students.length === 0 ? (
                  <tr><td className="student-empty" colSpan="4">No students yet. Add the first record above.</td></tr>
                ) : students.map((student) => (
                  <tr key={student._id}>
                    <td className="student-name-cell">{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                      <div className="student-row-actions">
                        <button className="student-action-edit" type="button" onClick={() => handleEdit(student)}>
                          Edit
                        </button>
                        <button className="student-action-delete" type="button" onClick={() => handleDelete(student)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Students;