{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign _tab = include.tab | default: "  " %}
{%- assign _pad = include.pad | default: "" %}
{%- if include.tab != nil %}{% assign _tab = include.tab %}{%- endif %}
{%- if include.pad != nil %}{% assign _pad = include.pad %}{%- endif %}
{%- if include.val == false %} {{- 'false' }}
{%- elsif include.val == 0 %} {{- '0' }}
{%- elsif include.val == nil %} {{- '[nil]' }}
{%- elsif include.val == empty %} {{- '[empty]' }}
{%- elsif include.val == blank %} {{- '[blank]' }}
{%- else %}
{{ _tab -}}
{%- include label.md text='keys' pad=_pad %}{{-' : '-}}
{%- include plural.md val=include.val.keys word=word_key %}
{{ _tab -}}
{%- include label.md text='size' pad=_pad %}{{-' : '-}}
{% include plural.md val=include.val word=include.word %}
{%- endif %}