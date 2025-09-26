// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault()
  
//   try {
//     const endpoint = activeRole === 'admin' 
//       ? '/api/auth/admin-login' 
//       : '/api/auth/doctor-login'
    
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password, rememberMe }),
//     })
    
//     const data = await response.json()
    
//     if (data.success) {
//       // Store token and redirect based on role
//       localStorage.setItem('token', data.token)
//       localStorage.setItem('userRole', data.role)
      
//       if (data.role === 'admin') {
//         window.location.href = '/admin/dashboard'
//       } else {
//         window.location.href = '/doctor/dashboard'
//       }
//     } else {
//       alert(data.error)
//     }
//   } catch (error) {
//     console.error('Login error:', error)
//     alert('Login failed. Please try again.')
//   }
// }
