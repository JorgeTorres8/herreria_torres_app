'use client'
import { createContext, useState, useEffect, useRef } from 'react'
import axios from 'axios';

export const HerreriaContext = createContext({})

export default function HerreriaProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});

    const dashboardRef = useRef(null);
    const swiperRef = useRef(null);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    useEffect(() => {
      const getCategories = async () => {
          setLoading(true);
          const {data} = await axios('../data/db.json')
          setCategories(data) 
          setLoading(false);
      }
      getCategories();
    }, [])

    
    useEffect(() => {
      setCurrentCategory(categories[0]);
    }, [categories])

    const handleClickCategory = id => {
      setLoading(true);
      const category = categories.filter( cat => cat.id === id);
      setCurrentCategory(category[0]);
      setLoading(false);

      if (swiperRef.current) {
        swiperRef.current.swiper.slideTo(0);
      }

      dashboardRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

  return (
    <HerreriaContext.Provider value={{
      isOpen,
      loading,
      toggle,
      categories,
      currentCategory,
      handleClickCategory,
      dashboardRef,
      swiperRef

    }}>
      {children}
    </HerreriaContext.Provider>)
}