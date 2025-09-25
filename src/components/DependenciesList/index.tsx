import { LinkCard } from '../LinkCard'
import React from 'react'
import dependencies from './dependencies-licenses.json'

interface Dependency {
  name: string
  installedVersion: string
  licenseType: string
}

export default function DependenciesList() {
  if (!dependencies || dependencies.length === 0) {
    return <div className="my-4 text-center">No dependencies found.</div>
  }

  return (
    <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      {(dependencies as Dependency[]).map((dep) => (
        <div
          key={dep.name}
          className="my-auto bg-[var(--rp-c-bg-soft)] rounded-lg transition-transform duration-300 hover:-translate-y-[5px]"
        >
          <LinkCard
            href={`https://www.npmjs.com/package/${dep.name}`}
            title={dep.name}
            description={'v' + dep.installedVersion + ' License: ' + dep.licenseType}
          />
        </div>
      ))}
    </div>
  )
} 