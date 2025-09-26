// // pages/api/auth/doctor-login.ts
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { email, password, rememberMe } = req.body
    
//     try {
//       // Doctor authentication logic
//       const doctorUser = await authenticateDoctor(email, password)
      
//       if (doctorUser) {
//         // Set doctor session/JWT
//         const token = generateDoctorToken(doctorUser)
        
//         res.status(200).json({ 
//           success: true, 
//           role: 'doctor',
//           user: doctorUser,
//           token 
//         })
//       } else {
//         res.status(401).json({ error: 'Invalid doctor credentials' })
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Doctor login failed' })
//     }
//   }
// }

// async function authenticateDoctor(email: string, password: string) {
//   // Doctor database verification logic
//   // Return doctor user data if valid
// }

// function generateDoctorToken(user: any) {
//   // Generate JWT with doctor permissions
// }
