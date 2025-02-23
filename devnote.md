# Dev Notes

Simple notes file for development

WE'RE NUKING STRAPI INTEGRATION AND SWITHING TO FIREBASE

## Git

### Reconfig

- [ ] Remove Strapi in main branch (strapi is configured on strapi-base-build local branch)
- [ ] push main to remote dev branch (`git push origin main:dev`)
- [ ] Create new firebase branch, add Firebase updates
- [ ] Push to dev (`git push origin firebase-build:dev`)
- [ ] Merge with main branch, push to main (`git push`)

## Todo

### Frontend

- [x] Update 'ClearView' project image
- [ ] Create Admin panel
  - [ ] Login page
  - [ ] Index data dashboard
  - [ ] Blog data dashoboard
- [ ] Blog page
  - [ ] Index page
  - [ ] Blog slug

### Backend

- ~[ ] Implement landing page strapi integration~
  - ~[x] Skill Grid~
  - ~[x] Experience~
  - ~[ ] Projects~
- ~[ ] Implement blog page strapi integration~
- [ ] Implement Firebase integration
  - [ ] Auth
  - [ ] Firestore
    - [ ] Skills
    - [ ] Projects
    - [ ] Experience
    - [ ] Blogs

## GraphQL (no longer being used :( )

Tasks to be worked on after removing all strapi involvement
[ ] Delete '__generated__' folder
[ ] uninstall any strapi/graphql packages from npm

- To generate types:

  `npm run compile`

  this regen the ts file needed for queries (<https://www.apollographql.com/docs/react/development-testing/static-typing>)

- To generate new types on updated queries:

    `npm run watch`
