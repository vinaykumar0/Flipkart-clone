import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, ListItem,List, styled } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../service/productApi';
import { getProducts } from '../../slices/productSlice';
import {Link, useNavigate, useParams} from 'react-router-dom'

const SearchContainer = styled(Box)`
border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`
const InputSearchBase = styled(InputBase)`
font-size: unset;
  width: 100%;
  padding-left: 20px;
`
const SearchIconWrapper = styled(Box)`
 margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;

`
const Search = () => {

const dispatch=useDispatch()
    const [text, setText] = useState('');
    const [open, setOpen] = useState(true)
    const handleChange = (e) => {
        setText(e.target.value)
        setOpen(false)
    }
    const { product } = useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    function hadleClick(){
        setOpen(false)
    }
  return (
      <SearchContainer>
          <InputSearchBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleChange(e)}
          />
          <SearchIconWrapper>
              <SearchIcon />
          </SearchIconWrapper>
          {
              text &&
              <ListWrapper>
                  {
                          product && product.filter(products => products.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
                              return (
                                  <ListItem key={product.id} onClick={hadleClick}>
                                      <Link
                                          to={`/product/${product.id}`}
                                          style={{ textDecoration: 'none', color: 'inherit' }}
                                      >
                                          {product?.title?.longTitle}
                                      </Link>
                                  </ListItem>
                              )
                          })
                  }
              </ListWrapper>
          }
      </SearchContainer>
  )
}

export default Search