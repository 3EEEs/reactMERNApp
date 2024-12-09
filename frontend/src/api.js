const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

export const fetchExercises = async () => {
  const response = await fetch(`${API_URL}/exercises`);
  return response.json();
};

export const fetchExercise = async (id) => {
  const response = await fetch(`${API_URL}/exercises/${id}`);
  return response.json();
};

export const createExercise = async (exercise) => {
  const response = await fetch(`${API_URL}/exercises`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exercise),
  });
  return response.json();
};

export const updateExercise = async (id, exercise) => {
  const response = await fetch(`${API_URL}/exercises/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exercise),
  });
  return response.json();
};

export const deleteExercise = async (id) => {
  const response = await fetch(`${API_URL}/exercises/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
