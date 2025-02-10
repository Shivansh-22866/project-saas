'use client'

import useProject from '@/hooks/use-project'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  const {user} = useUser()
  const {selectedProject} = useProject()
  return (
    <div>
      <div>
        {user?.firstName}
      </div>
      <div>
        {user?.lastName}
      </div>
      <div>
        {selectedProject?.name}
      </div>
    </div>
  )
}

export default Dashboard