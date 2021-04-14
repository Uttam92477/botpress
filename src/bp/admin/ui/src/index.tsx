// @ts-ignore
import * as BlueprintJsCore from 'expose-loader?exposes=BlueprintJsCore!@blueprintjs/core'
// @ts-ignore
import * as BlueprintJsSelect from 'expose-loader?exposes=BlueprintJsSelect!@blueprintjs/select'
import React from 'react'
import ReactDOM from 'react-dom'

window['BlueprintJsCore'] = BlueprintJsCore
window['BlueprintJsSelect'] = BlueprintJsSelect

import 'ui-shared/dist/theme.css'
import '~/app/style/index.css'

import { makeMainRoutes } from '~/app/routes'
import { initializeTranslations } from '~/app/translations'

const routes = makeMainRoutes()

initializeTranslations()
ReactDOM.render(<div>{routes}</div>, document.getElementById('root'))
