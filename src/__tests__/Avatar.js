/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Avatar from '../Avatar'
import theme from '../theme'
import {px, render, renderClasses, renderStyles, loadCSS, unloadCSS} from '../utils/testing'

const STYLE_PATH = 'primer-avatars/build/build.css'

beforeAll(() => {
  return loadCSS(STYLE_PATH)
})

afterAll(() => unloadCSS(STYLE_PATH))

describe('Avatar', () => {
  it('is a system component', () => {
    expect(Avatar.systemComponent).toEqual(true)
  })

  it('renders default props', () => {
    expect(render(<Avatar />)).toMatchSnapshot()
  })

  it('renders small by default', () => {
    const size = 20
    const result = render(<Avatar />)
    expect(result.props.width).toEqual(size)
    expect(result.props.height).toEqual(size)
  })

  it('respects the size prop', () => {
    const result = render(<Avatar size={40} alt="github" />)
    expect(result.props.width).toEqual(40)
    expect(result.props.height).toEqual(40)
  })

  it('respects isChild', () => {
    expect(render(<Avatar isChild />)).toMatchSnapshot()
  })

  it('passes through the src prop', () => {
    expect(render(<Avatar src="primer.png" />).props.src).toEqual('primer.png')
  })

  it('respects margin props', () => {
    expect(render(<Avatar m={2} />)).toHaveStyleRule('margin', px(theme.space[2]))
  })
})
