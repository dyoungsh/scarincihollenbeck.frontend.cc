# Scarincihollenbeck.com - front end

Version two of donald's coin catalog website. This application was refactored to be purley front-end. By relying on free third-party services this application maintainance has been reduced as well as its over all cost.

### [Live Site](https://scarincihollenbeck.com/)

## Build status

![Lint passing](https://camo.githubusercontent.com/df0f65b2d0e7a0448dd50abbc3b4364dc971533f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f776f726b666c6f772f7374617475732f70726574746965722f70726574746965722f4c696e743f6c6162656c3d4c696e74267374796c653d666c61742d737175617265)
![Coverage](https://camo.githubusercontent.com/facfcb6afd684d2c9701c7d6add65f391fdf86fc/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f6477796c2f686170692d617574682d6a7774322e7376673f6d61784167653d32353932303030)
![Speed blazing](https://camo.githubusercontent.com/c0d653f4e211ffff68800215f80fb458e25ae6f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73706565642d626c617a696e672532302546302539462539342541352d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)

## Code style

#### Client Application
![Code Style Airbnb](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)

#### Sitemap Application
[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)

## Tech used

**Client Application built with**
  * [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
  * [Font Awesome](https://fontawesome.com/)
  * [Google reCaptcha](https://www.google.com/recaptcha/about/)
  * [Gmail API](https://developers.google.com/gmail/api)
  * [Next](https://nextjs.org/)
  * [Nodemailer](https://nodemailer.com/about/)
  * [Nookies](https://github.com/maticzav/nookies#readme)
  * [NProgress](https://ricostacruz.com/nprogress/)
  * [React Bootstrap](https://react-bootstrap.github.io/)
  * [React Cookie-Consent](https://github.com/Mastermindzh/react-cookie-consent#readme)
  * [React Dropzone](https://react-dropzone.js.org/)
  * [React LazyLoad](https://github.com/twobin/react-lazyload)
  * [React Multi-Carousel](https://w3js.com/react-multi-carousel)
  * [React Share](https://github.com/nygardk/react-share#readme)
  * [React Spinners](https://www.davidhu.io/react-spinners/)
  * [React Stickynode](https://github.com/yahoo/react-stickynode)
  * [React Virtualized](http://bvaughn.github.io/react-virtualized/#/components/List)
  * [RSS Parser](https://github.com/rbren/rss-parser#readme)
  * [SaSS](https://sass-lang.com/)
  * [Styled Components](https://styled-components.com/)
  * [SWR](https://swr.vercel.app/)

**Sitemap Application built with**
  * [datetime](https://docs.python.org/3/library/datetime.html)
  * [json](https://docs.python.org/3/library/json.html)
  * [Python](https://www.python.org/)
  * [Requests](https://requests.readthedocs.io/en/master/)
  * [Virtualenv](https://virtualenv.pypa.io/en/latest/)
  * [The ElementTree XML API](https://docs.python.org/3/library/xml.etree.elementtree.html)

## Install

```
git clone https://github.com/s1100h/scarincihollenbeck.cc.git
```

**Client Application**
```
cd scarincihollenbeck.cc/client/app
yarn install
```

**Sitemap Application**
```
cd scarincihollenbeck.cc/sitemap/app
python3 -m venv venv
pip install -r requirements.txt 
```

## Development

Before you can run the client application you first need to download and configure the scarincihollenbeck.com backend services. Do to so follow this [link](https://github.com/s1100h/admin.scarincihollenbeck.cc/tree/main) and follow the README insturctions.

After your finish setting up the backend, you can now run the command ```yarn dev``` inside the ```client/app``` directory. This will lauch the local version of the site into the browser on port ```7700```.

## Production

To create a production copy of the client application run ```yarn build``` inside the ```client/app``` directory. Then to launch the production server locally run ```yarn start```. This will launch the production verion of the site into the browser running on port ```7300```.

### Deployment

To deploy changes to the live domain [scarincihollenbeck.com](https://scarinciholleneck.com) commit your changes to the ```client-prod``` branch. To send changes to the live preview domain [https://scarincihollenbeck-cc-git-production.s1100h.vercel.app/](https://scarincihollenbeck-cc-git-production.s1100h.vercel.app/) commit your changes to ```production``` branch.
