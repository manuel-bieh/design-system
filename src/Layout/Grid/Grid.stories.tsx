import React from 'react';

// import { Meta, StoryFn } from '@storybook/react';
import { Meta } from '@storybook/react';
// import ClientLogos from '.';
import { Grid, Column } from '.';
import css from './Grid.module.css';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {},
} as Meta<typeof Grid>;

// const Template: StoryFn<typeof Grid> = () => <Grid />;

// export const Primary = Template.bind({});
export const Primary = () => (
  <Grid className={css.debug} textAlign="right" seamless>
    <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
      1
    </Column>
    <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
      2
    </Column>
    <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
      3
    </Column>
    <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
      4
    </Column>
    <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
      5
    </Column>
    <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
      6
    </Column>
  </Grid>
);

// import { Grid, Column } from '.';

// .add('Fixed max width', () => (
//   <Grid className={css.debug}>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       1
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       2
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       3
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       4
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       5
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       6
//     </Column>
//   </Grid>
// ))
// .add('Fluid width', () => (
//   <Grid fluid className={css.debug}>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       1
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       2
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       3
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       4
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       5
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       6
//     </Column>
//   </Grid>
// ))
// .add('Aligned columns', () => (
//   <>
//     <Grid className={css.debug} justifyContent="start">
//       <Column xs={4} className={css.debug}>
//         Left column
//       </Column>
//     </Grid>
//     <br />
//     <Grid className={css.debug} justifyContent="center">
//       <Column xs={4} className={css.debug}>
//         Centered column
//       </Column>
//     </Grid>
//     <br />
//     <Grid className={css.debug} justifyContent="end">
//       <Column xs={4} className={css.debug}>
//         Right column
//       </Column>
//     </Grid>
//   </>
// ))
// .add('12 units with fixed width', () => (
//   <Grid className={css.debug}>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       1
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       2
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       3
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       4
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       5
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       6
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       7
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       8
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       9
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       10
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       11
//     </Column>
//     <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
//       12
//     </Column>
//   </Grid>
// ))
// .add('Nested grid', () => (
//   <Grid className={css.debug}>
//     <Column xs={12} sm={6} md={5} lg={4} xl={3} className={css.debug}>
//       1
//     </Column>
//     <Column xs={12} sm={6} md={7} lg={8} xl={9} className={css.debug}>
//       <Grid className={css.debug}>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           1
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           2
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           3
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           4
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           5
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           6
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           7
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           8
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           9
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           10
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           11
//         </Column>
//         <Column xs={12} md={3} lg={2} xl={1} className={css.debug}>
//           12
//         </Column>
//       </Grid>
//     </Column>
//   </Grid>
// ))
// .add('More nested grid', () => (
//   <>
//     <Grid className={css.debug}>
//       <Column xs={6} className={css.debug}>
//         1
//       </Column>
//       <Column xs={6} className={css.debug}>
//         <Grid className={css.debug}>
//           <Column xs={6} className={css.debug}>
//             2.1
//           </Column>
//           <Column xs={6} className={css.debug}>
//             <Grid className={css.debug}>
//               <Column xs={6} className={css.debug}>
//                 3.1
//               </Column>
//               <Column xs={6} className={css.debug}>
//                 3.2
//               </Column>
//             </Grid>
//           </Column>
//         </Grid>
//       </Column>
//     </Grid>
//     <br />
//     <Grid className={css.debug}>
//       <Column xs={6} className={css.debug}>
//         1
//       </Column>
//       <Column xs={3} className={css.debug}>
//         2
//       </Column>
//       <Column xs={3} className={css.debug}>
//         3
//       </Column>
//     </Grid>
//   </>
// ));
