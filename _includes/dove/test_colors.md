{% include ui.html %}

##### Base

**black**{: .text-white.bg-black.pa_5.ph }
**white**{: .text-black.bg-white.pa_5.ph }

##### Borders

{%- capture bqs %}
> **primary**{: .text-primary }
> > **secondary**{: .text-secondary }
> > > **pending**{: .text-pending }
> > > > **gray**{: .text-gray }
> > > > > **slategray**{: .text-slategray }
> > > > > > **red**{: .text-red }
> > > > > > > **blue**{: .text-blue }
> > > > > > > > **green**{: .text-green }
> > > > > > > > > **purple**{: .text-purple }
> > > > > > > > > > **yellow**{: .text-yellow }
> > > > > > > > > > > **orange**{: .text-orange }
> > > > > > > > > > {: .border-orange }
> > > > > > > > > {: .border-yellow }
> > > > > > > > {: .border-purple }
> > > > > > > {: .border-green }
> > > > > > {: .border-blue }
> > > > > {: .border-red }
> > > > {: .border-slategray }
> > > {: .border-gray }
> > {: .border-pending }
> {: .border-secondary }
{: .border-primary }
{%- endcapture %}
<div id="bqs">{{ bqs | markdownify }}</div>
<style>
  @media only screen and (max-width: 426px) {
    #bqs blockquote { padding-right:0 }
  }
</style>

##### Horizontal lines

<hr/>{: .border-primary }
<hr/>{: .border-secondary }
<hr/>{: .border-pending }
<hr/>{: .border-gray }
<hr/>{: .border-slategray }
<hr/>{: .border-red }
<hr/>{: .border-blue }
<hr/>{: .border-green }
<hr/>{: .border-purple }
<hr/>{: .border-yellow }
<hr/>{: .border-orange }

##### Box wrapper

`box`{: .no_bg }
{: .box.text-center }

`box.border-purple`{: .no_bg.text-purple }
{: .box.border-purple.text-center }

`box.bg-green`{: .no_bg.text-white }
{: .box.bg-green.text-white.ba0.text-center }