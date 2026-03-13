import { useState } from "react";

function SignIn() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    
    setForm((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); 
    console.log("Form Submitted Successfully:", form);
    alert("Check the console for your data!");
  }

  // Styling
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    input: {
      padding: '12px 15px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      color: 'white',
      outline: 'none',
      fontSize: '16px'
    },
    button: {
      padding: '15px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(to right, #00dbde 0%, #fc00ff 100%)',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px',
      letterSpacing: '1px'
    },
    error: {
      color: '#ff4d4d',
      fontSize: '14px',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.formCard} onSubmit={handleSubmit}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Join the Marathon</h2>

        <input
          style={styles.input}
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />

        <input
          style={styles.input}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />

        <input
          style={styles.input}
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <input
          style={styles.input}
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} type="submit">
          START CODING
        </button>
      </form>
    </div>
  );
}

export default SignIn;