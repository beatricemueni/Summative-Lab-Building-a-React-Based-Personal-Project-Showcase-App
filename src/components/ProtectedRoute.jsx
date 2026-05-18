
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ Component, requiredRole = 'admin' }) {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (role !== requiredRole) return <Navigate to="/" replace />

  return <Component />
}

export default ProtectedRoute