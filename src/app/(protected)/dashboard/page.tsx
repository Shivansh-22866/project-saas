'use client'

import useProject from '@/hooks/use-project'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  const {selectedProject} = useProject()
  return (
    <div>
      <div className='flex items-center justify-between flex-wrap gap-y-4'>
        <div className='w-fit rounded-md bg-primary px-4 py-3'>
          <div className='flex items-center'>
          <Github className='size-5 text-white'/>
          <div className="ml-2">
            <p className='font-medium text-white text-sm'>
              This project is linked to {' '}
              <Link href={selectedProject?.githubUrl ?? ''} className='inline-flex items-center text-white/80 hover:underline'>
                {selectedProject?.githubUrl}
                <ExternalLink className='size-4 ml-1'/>
              </Link>
            </p>
          </div>
          </div>
        </div>

        <div className="h-4"></div>

        <div className="flex items-center gap-4">
          Team Members
          Invite
          Archive
        </div>


      </div>

      <div className="mt-4">
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-5'>
          Ask Question
          Meetings
        </div>
      </div>

      <div className="mt-8">

      </div>
      Commits
    </div>
  )
}

export default Dashboard