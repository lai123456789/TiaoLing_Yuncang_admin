import defaultSettings from '@/settings'

const title = defaultSettings.title || '跳羚云仓'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} | ${title}`
  }
  return `${title}`
}
