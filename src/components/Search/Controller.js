import React, { useState, useEffect, useRef, useCallback } from 'react'
import algoliasearch from 'algoliasearch/lite'

export default SearchComponent => {
  return () => {
    const client = algoliasearch(
      'PH3OFVWITF',
      '91798fcd83c516106a4a1499620d35a5'
    )
    const index = client.initIndex('Posts')

    const [query, setQuery] = useState(``)
    const [hits, setHits] = useState([])
    const wrapRef = useRef(null)

    useEffect(() => {
      if (query !== '') {
        index.search({
          query: query,
        }, (err, { hits } = {}) => {
          if (err) { 
            throw err 
          }
          setHits(hits)
        })
      }

    }, [query])

    useEffect(() => {
      document.addEventListener('mousedown', onMouseDown, false)

      return () => {
        document.removeEventListener('mousedown', onMouseDown)
      }
    }, [wrapRef])
  
    const onChangeQuery = useCallback(e => {
      const { value } = e.target
      setQuery(value)
    }, [query])

    const onMouseDown = e => {
      // console.log(wrapRef.current, e)
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        reset()
      }
    }

    const reset = () => {
      setHits([])
      setQuery('')
    }

    const state = {
      query,
      hits,
      wrapRef,
      reset,
      onChangeQuery,
    }

    return (
      <SearchComponent {...state} />
    )
  }
}
