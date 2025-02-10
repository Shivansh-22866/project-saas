import { api } from '@/trpc/react'
import React from 'react'
import {useLocalStorage} from 'usehooks-ts'

const useProject = () => {
  const {data: projects} = api.project.getProjects.useQuery()
  const [projectId, setProjectId] = useLocalStorage('selectedProject', projects?.[0]?.id)

  const selectedProject = projects?.find(p => p.id === projectId)

  return {
    projects,
    projectId,
    selectedProject,
    setProjectId
  }
}

export default useProject