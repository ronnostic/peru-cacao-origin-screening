# Cacao origin, risk & readiness
A static, accessible case-study page for a public-data GIS screening demonstration in Ucayali, Peru.
The page documents a QGIS workflow that compared mapped cacao plot polygons with mapped forest-loss features for 2019–2022. It explains the result in investor language and includes the underlying technical steps, formulas, source links, screenshots, and limits.
## Run locally
Open index.html in a browser, or serve this directory with any static file server. The site has no build step or runtime dependency.
## The evidence in this demo
- 462 cacao plot polygons were checked and repaired.
- 85 plot IDs matched a row in the overlap summary.
- 377 plot IDs had no matching summary row. The page treats these as unknown until checked.
- The highest calculated overlap shares shown are MB_71 at 93.54%, LS_CP_360 at 86.59%, and LS_CP_366 at 59.24%.
- QGIS 4.2.3, GeoJSON, GeoPackage, a SERFOR/MINAM ArcGIS REST feature layer, and an OpenStreetMap basemap appear in the workflow.
These figures describe mapped overlap area divided by mapped plot area. They do not estimate crop loss, production, revenue, legal exposure, compliance, or investment performance.
## Accessibility
The page uses semantic landmarks and headings, a skip link, visible keyboard focus, responsive layout, keyboard-operable evidence tabs, reduced-motion support, image alternatives, and readable text sizing. The screenshot viewer can be operated with Tab and arrow keys.
## Sources
- Cacao polygons in Peru, Harvard Dataverse: https://doi.org/10.7910/DVN/XMQNC2
- SERFOR/MINAM forest-loss layer: https://geo.serfor.gob.pe/geoservicios/rest/services/Integracion/Int_IDE_MINAM_PERDIDA_BOSQUE/MapServer/0
- European Commission EUDR overview: https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en
- European Commission EUDR roles and responsibilities: https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation/roles-and-responsibilities_en
- Regulation (EU) 2023/1115: https://eur-lex.europa.eu/eli/reg/2023/1115/oj/eng
- OpenStreetMap attribution: https://www.openstreetmap.org/copyright
## Important scope note
This is a public-data workflow demonstration. It is not an Apyara assessment or partner diligence report. No producer registry, land-rights documentation, buyer records, shipment data, field validation, or legal review was included. A mapped overlap is a lead for review, not a finding of non-compliance.
