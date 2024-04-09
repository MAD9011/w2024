(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{234:function(e,n,t){e.exports=t.p+"assets/img/components-banner.5b886a94.png"},235:function(e,n,t){e.exports=t.p+"assets/img/figma-community.7e2ae0a0.png"},343:function(e,n,t){e.exports=t.p+"assets/img/component-code.45236857.png"},344:function(e,n,t){e.exports=t.p+"assets/img/nested-icon-components.dd88cdd9.png"},441:function(e,n,t){"use strict";t.r(n);var s=t(10),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"week-11-design-systems-part-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#week-11-design-systems-part-2"}},[e._v("#")]),e._v(" Week 11 - Design Systems Part 2")]),e._v(" "),n("h2",{attrs:{id:"learning-objectives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#learning-objectives"}},[e._v("#")]),e._v(" Learning Objectives")]),e._v(" "),n("p",[e._v("By the end of this week, students will be able to:")]),e._v(" "),n("ul",[n("li",[e._v("Define and explain the purpose of components in Figma and their benefits in UI/UX design.")]),e._v(" "),n("li",[e._v("Create, edit, and organize components in Figma for efficient design workflows.")]),e._v(" "),n("li",[e._v("Understand and apply the concept of nesting components to create complex UI elements.")]),e._v(" "),n("li",[e._v("Utilize components effectively in designs, including instantiation and property overriding.")]),e._v(" "),n("li",[e._v("Integrate and manage local styles within components to ensure consistency and scalability in design projects.")])]),e._v(" "),n("h2",{attrs:{id:"introduction-to-components-in-figma"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-components-in-figma"}},[e._v("#")]),e._v(" Introduction to Components in Figma")]),e._v(" "),n("p",[n("img",{attrs:{src:t(234),alt:"Component Example"}})]),e._v(" "),n("p",[e._v("Components in Figma are powerful, reusable design elements that serve as the foundational building blocks of design systems, enabling designers to create consistent and efficient designs across multiple projects. With a modular approach to designing interfaces, components can be utilized within the same project multiple times or across different projects. Once a master component is created, its instances can be placed anywhere within a design. Crucially, any updates made to the master component are automatically reflected across all its instances, ensuring uniformity and consistency throughout your design work. This is especially beneficial for frequently used elements such as buttons, icons, headers, and footers, allowing for their seamless integration across different screens or projects.")]),e._v(" "),n("h3",{attrs:{id:"benefits-of-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-components"}},[e._v("#")]),e._v(" Benefits of Components")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Consistency")]),e._v(": Components ensure that your design elements remain uniform across your project, which is crucial for maintaining a cohesive look and feel.")]),e._v(" "),n("li",[n("strong",[e._v("Efficiency")]),e._v(": They significantly reduce the time and effort required to make global updates. Changing a single component updates all instances where that component is used.")]),e._v(" "),n("li",[n("strong",[e._v("Reusability")]),e._v(": Once a component is created, it can be reused in any number of designs, saving time and fostering a modular design approach.")]),e._v(" "),n("li",[n("strong",[e._v("Scalability")]),e._v(": Components make it easier to scale your designs. As projects grow, components can be easily managed and updated, ensuring that large projects remain manageable.")])]),e._v(" "),n("h3",{attrs:{id:"difference-between-components-and-frames"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-components-and-frames"}},[e._v("#")]),e._v(" Difference Between Components and Frames")]),e._v(" "),n("p",[e._v("While both components and frames are essential elements within Figma, they serve different purposes and have distinct characteristics:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Frames")]),e._v(": Frames are containers that can hold other objects, including shapes, text, and even other frames. They are used to structure the layout of your design, such as creating the canvas for a webpage or defining the boundaries of a mobile app screen. Frames can also be nested within each other to create complex layouts.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Components")]),e._v(": Unlike frames, components are defined by their reusability and the ability to ensure consistency across designs. Components can contain frames, but they come with the added benefit of being instances that are linked back to a master component. This linkage allows for the central management of design elements, where changes to the master component are reflected across all instances.")])])]),e._v(" "),n("h2",{attrs:{id:"creating-and-editing-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-editing-components"}},[e._v("#")]),e._v(" Creating and Editing Components")]),e._v(" "),n("YouTube",{attrs:{title:"Figma Tutorial: Components - The Basics",url:"https://www.youtube.com/embed/k74IrUNaJVk?si=h0GvncQBVj2Bft21"}}),e._v(" "),n("h2",{attrs:{id:"creating-component-variants"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-component-variants"}},[e._v("#")]),e._v(" Creating Component Variants")]),e._v(" "),n("YouTube",{attrs:{title:"Figma Tutorial: Variants",url:"https://www.youtube.com/embed/y29Xwt9dET0?si=RTlkMvLZ1HU-A2T0"}}),e._v(" "),n("h2",{attrs:{id:"creating-components-like-a-developer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-components-like-a-developer"}},[e._v("#")]),e._v(" Creating Components Like a Developer")]),e._v(" "),n("p",[e._v("In our previous discussions on Auto-layout, we drew parallels between Figma's Auto-layout feature and the flexbox property in CSS, illustrating how Figma's design capabilities can mirror web development practices. This analogy extends beyond Auto-layout into other facets of component creation in Figma.")]),e._v(" "),n("p",[e._v("Take the example of implementing a hover effect on a card that triggers the display of a new element. In web development, this effect is usually achieved by incorporating the element in the initial markup but keeping it hidden with CSS until the user hovers over the card. We apply a similar strategy when creating components in Figma. The base component is designed to include the hover state's elements from the start. These elements are then visually hidden or made inactive in the default variant and are only revealed or activated in the hover state variant. This approach not only streamlines the design process but also aligns closely with the logic and practices used in front-end development, facilitating a more cohesive workflow between design and development teams.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(343),alt:"Component vs Code"}})]),e._v(" "),n("h2",{attrs:{id:"nesting-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nesting-components"}},[e._v("#")]),e._v(" Nesting Components")]),e._v(" "),n("p",[e._v("Nesting components in Figma is a technique that involves placing one component inside another. This approach is instrumental in building more complex and dynamic design systems, allowing designers to create detailed and highly customizable interfaces. By mastering nested components, designers can significantly enhance their workflow efficiency and design consistency.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(344),alt:"Nested Components"}})]),e._v(" "),n("h3",{attrs:{id:"benefits-of-nesting-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-nesting-components"}},[e._v("#")]),e._v(" Benefits of Nesting Components")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Modularity:")]),e._v(" Nesting components promotes a modular design approach, making it easier to assemble, disassemble, and reconfigure parts of your design.")]),e._v(" "),n("li",[n("strong",[e._v("Scalability:")]),e._v(" It allows your design system to grow more seamlessly. As new components are needed, they can be created by combining existing ones, saving time and effort.")]),e._v(" "),n("li",[n("strong",[e._v("Efficiency:")]),e._v(" Updates to base components automatically propagate to all instances where they are nested, streamlining the process of making global changes.")]),e._v(" "),n("li",[n("strong",[e._v("Consistency:")]),e._v(" Ensures design consistency across projects by reusing components, reducing the risk of discrepancies.")])]),e._v(" "),n("h3",{attrs:{id:"how-to-create-and-manage-nested-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-and-manage-nested-components"}},[e._v("#")]),e._v(" How to Create and Manage Nested Components")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("Start Simple:")]),e._v(" Begin by creating your base components. These are the smallest, most atomic parts of your design (e.g., icons, buttons).")]),e._v(" "),n("li",[n("strong",[e._v("Combine Components:")]),e._v(" To create a nested component, drag an existing component into another component. Figma automatically recognizes this as nesting.")]),e._v(" "),n("li",[n("strong",[e._v("Use Variants:")]),e._v(" Leverage variants to manage different states or types of nested components, keeping them organized and accessible.")]),e._v(" "),n("li",[n("strong",[e._v("Organize and Document:")]),e._v(" Use Figma’s naming conventions and team libraries to organize your nested components. Documentation helps your team understand how and when to use each component.")]),e._v(" "),n("li",[n("strong",[e._v("Review and Refine:")]),e._v(" Regularly review your nested components to ensure they remain efficient and effective. Simplify or decompose them as needed.")])]),e._v(" "),n("h2",{attrs:{id:"libraries-for-ui-in-figma"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#libraries-for-ui-in-figma"}},[e._v("#")]),e._v(" Libraries for UI in Figma")]),e._v(" "),n("p",[e._v("Figma libraries are especially useful for UI design as they allow for the consistent application of design patterns across different screens and projects.")]),e._v(" "),n("YouTube",{attrs:{title:"Figma tutorial: Create a shareable team library",url:"https://www.youtube.com/embed/79T8Q6OBmRk?si=_IkxRjfrfLfE4AnQ"}}),e._v(" "),n("h2",{attrs:{id:"engaging-with-the-figma-community-for-ui-inspiration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engaging-with-the-figma-community-for-ui-inspiration"}},[e._v("#")]),e._v(" Engaging with the Figma Community for UI Inspiration")]),e._v(" "),n("p",[n("img",{attrs:{src:t(235),alt:"Figma Community Banner"}})]),e._v(" "),n("p",[e._v("The Figma Community is a rich resource for UI designers, offering access to a wide range of UI design templates and UI kits.")]),e._v(" "),n("h3",{attrs:{id:"benefits-of-the-figma-community-for-ui-designers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-the-figma-community-for-ui-designers"}},[e._v("#")]),e._v(" Benefits of the Figma Community for UI Designers:")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("UI Templates")]),e._v(": Find and use templates specifically created for UI designs.")]),e._v(" "),n("li",[n("strong",[e._v("Learning from Experts")]),e._v(": Follow leading UI designers to learn from their designs and workflows.")]),e._v(" "),n("li",[n("strong",[e._v("Sharing and Feedback")]),e._v(": Share your UI designs to get feedback and suggestions from the community.")])]),e._v(" "),n("p",[e._v("By focusing on these aspects, you can effectively use Figma to create, manage, and share UI design components and assets, ensuring a consistent and user-friendly experience.")])],1)}),[],!1,null,null,null);n.default=a.exports}}]);