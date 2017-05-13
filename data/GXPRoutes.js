
export default {
  getSections: {
    path: 'CMS/Content/Sections',
    key: 'getSections',
    method: 'GET'
  }
  getCategoryItems: {
    path: 'CMS/Content/Categories/{{CategoryCode}}/Items',
    key: 'getCategoryItems',
    method: 'GET'
  },
  getItem: {
    path: 'CMS/Content/Items/{{Code}}',
    key: 'getItem',
    method: 'GET'
  }
}