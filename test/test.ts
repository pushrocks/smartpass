import { expect, tap } from 'tapbundle'
import * as smartpass from '../ts/index'

tap.test('first test', async () => {
  console.log(smartpass.standardExport)
})

tap.start()
