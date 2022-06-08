import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
import NFTCard from './NFTCard'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4`
}

const Listings = () => {
  const [listings, setListings] = useState([])
  const marketplace = useMarketplace("0x73C1970ae3732f2547c3392909D2eD67f11b2723")

  useEffect(() => {
    getListings()
  }, [])

  const getListings = async() => {
    try {
      const list = await marketplace.getActiveListings()
      setListings(list)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className={style.wrapper}>
      {listings.length > 0 ? (
      <>
        {listings?.map((listing, index) => (
        <Link
          key = {index}
          href = {`/assets/${listing.assetContractAddress}/${listing.id}`}
        >
          <a>
            <NFTCard listing= {listing}/>
          </a>
        </Link>
        ))}
      </>
      ) : (
      <div>LOADING...</div>
      )}
    </div>
  )
}

export default Listings