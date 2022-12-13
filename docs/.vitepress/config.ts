import { nav, sidebar, pages } from '../../themeConfig'
import { baseURL } from '../../themeConfig/constants'
import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
export default defineConfig({
  title: 'Tk Wiki',
  description: 'tk Wiki',
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  base: `${baseURL}/`,
  themeConfig: {
    nav: nav,
    sidebar: {
      ...sidebar
    },
    footer: {
      message: '备案号：<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022016215号-1	</a>',
      copyright: ''
    }
  }
})
try {
  generateJson()
} catch (error) {
  console.log('error :', error)
}

function generateJson(test = false) {
  console.log('is Test :', test)
  if (!test) {
    fs.writeFileSync(path.resolve(__dirname, '../public/sidebar.json'), JSON.stringify(sidebar, null, '\t'))
    fs.writeFileSync(path.resolve(__dirname, '../public/nav.json'), JSON.stringify(nav, null, '\t'))
    fs.writeFileSync(path.resolve(__dirname, '../public/pageInfo.json'), JSON.stringify(pages, null, '\t'))
  } else {
    console.log('sidebar: ', sidebar)
    fs.writeFileSync(path.resolve(__dirname, '../public/sidebar-test.json'), JSON.stringify(sidebar, null, '\t'))
  }
}
