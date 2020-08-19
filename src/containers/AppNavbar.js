import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBrandLink,
  NavbarSecondary,
  NavbarLink,
} from '../components/Navbar'
import { useLangKey, I18nLink } from '../components/I18nContext'

const locales = {
  en: {
    about: 'About',
    blog: 'Blog',
    workshops: 'Books & Products',
    projects: 'Projects',
  },

}

export function AppNavbar() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Navbar>
      <NavbarBrandLink as={I18nLink} to="/">
        <NavbarBrand>Krzysztof Pacholski</NavbarBrand>
      </NavbarBrandLink>
      <NavbarSecondary>
        <NavbarLink as={I18nLink} to="/">
          {t.about}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/blog">
          {t.blog}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/">
          {t.workshops}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/">
          {t.projects}
        </NavbarLink>
      </NavbarSecondary>
    </Navbar>
  )
}
