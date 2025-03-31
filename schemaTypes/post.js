const transliterate = (text) => {
    const map = {
      а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ye', ж: 'zh',
      з: 'z', и: 'y', і: 'i', ї: 'yi', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n',
      о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
      ч: 'ch', ш: 'sh', щ: 'shch', ь: '', ю: 'yu', я: 'ya'
    };
  
    return text.toLowerCase().split('').map(char => map[char] || char).join('');
  };

const post = {
    name: "post",
    type: "document",
    title: "Post",
    fields: [
      {
        title: "Meta title",
        name: "meta_title",
        type: "string"
      },
      {
        title: "Title",
        name: "title",
        type: "string"
      },
      {
        title: "Publish date",
        name: "publishDate",
        type: "date"
      },
      {
        name: 'poster',
        type: 'image',
        // 👇 Enables crop and hotspot tools
        options: {
          hotspot: true
        },
        // 👇 Optionally append additional fields to the image object
        fields: [
          {
            name: 'caption',
            type: 'string',
          },
          {
            name: 'attribution',
            type: 'string',
          }
        ]
      },
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
            source: 'title',
            slugify: (input) => transliterate(input)
                                  .replace(/\s+/g, '-')
                                  .replace(/[^a-z0-9-]/g, '')
                                  .slice(0, 200)
          }
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [
            {
                name: 'contentText',
                type: 'block',
                styles: [
                  {title: 'Quote', value: 'blockquote'},
                  {title: 'H4', value: 'h4'},
                ],
            },
            {
                name: 'blokPostImage',
                type: 'image',
                options: {
                  hotspot: true
                },
            }
        ]
      },
      {
        title: 'Опис',
        name: 'description',
        type: 'text'
      }
    ]
  };

  export default post;