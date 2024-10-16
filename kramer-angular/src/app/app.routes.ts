import {Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {TestsPageComponent} from '../pages/tests-page/tests-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';
import {RunTestPage} from '../pages/run-test/run-test.page';
import {CalibrationIncomplete} from '../pages/run-test/pages/calibration/calibration-incomplete.component';
import {BatchPage} from '../pages/run-test/pages/batch/batch.page';
import {ContainerPage} from '../pages/run-test/pages/container/container.page';
import {NewContainerPage} from '../pages/new-container/new-container.page';
import {SetNumberOfTestsPage} from '../pages/set-number-of-tests/set-number-of-tests.page';
import {TestInProgressPage} from '../pages/test-in-progress/test-in-progress.page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tests',
    component: TestsPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'run-test',
    component: RunTestPage,
    children: [
      {
        path: 'calibration',
        component: CalibrationIncomplete
      },
      {
        path: 'batch',
        component: BatchPage
      },
      {
        path: 'container',
        component: ContainerPage
      },
      {
        path: 'new-container',
        component: NewContainerPage
      },
      {
        path: 'set-number-of-tests',
        component: SetNumberOfTestsPage
      },
      {
        path: 'test-in-progress',
        component: TestInProgressPage
      }
    ]
  }
];
