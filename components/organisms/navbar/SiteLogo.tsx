import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  scrollTop: boolean
}

const SiteLogo: React.FC<Props> = ({ scrollTop }: Props) => {
  if (!scrollTop) {
    return (
      <div>
        <Link href="/">
          <a>
            <Image
              alt="Scarinci Hollenbeck, LLC"
              width={360}
              height={65}
              layout="intrinsic"
              src="/images/sh-logo-diamond.svg"
              data-testid="logo"
            />
          </a>
        </Link>
      </div>
    )
  }
  return <></>
}

export default SiteLogo
