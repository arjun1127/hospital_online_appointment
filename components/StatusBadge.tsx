import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { StatusIcon } from '@/constants'
const StatusBadge = ({status}:{status:Status}) => {
  return (
    <div className={clsx('status-badge',{
        'bg-green-600':status==='scheduled',
        'bg-red-600':status==='cancelled',
        'bg-yellow-600':status==='pending',
    })}>
        <Image
        src={StatusIcon[status]}
        alt={status}
        width={24}
        height={24}
        className='h-fit w-3'
        />
        <p className={clsx('text-12-semibold capitalize',{
            'text-green-500':status==='scheduled',
            'bg-red-600':status==='cancelled',
            'bg-yellow-600':status==='pending',
        })}>
            {status}
        </p>
    </div>
  )
}

export default StatusBadge