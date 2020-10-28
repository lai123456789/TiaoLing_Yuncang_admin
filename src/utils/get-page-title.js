import defaultSettings from '@/settings'

const title = defaultSettings.title || '菜鸟云仓'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} | ${title}`
  }
  return `${title}`
}
