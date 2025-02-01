'use client'

import React from 'react'
import { useForm } from 'react-hook-form';

type FormInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}

const CreatePage = () => {
  const {register, handleSubmit, reset} = useForm<FormInput>()
  return (
    <div className='flex items-center gap-12 h-full justify-center'>
        <div className='h-58 w-58 bg-blue-700 block relative'>
            
        </div>
        <div>
            <div>
                <h1 className='font-semibold text-2xl '>
                    Link your Github Repository
                </h1>
            </div>
        </div>
    </div>
  )
}

export default CreatePage