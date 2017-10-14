// function solve(args) {
//     let matchAnchorTags = /<a href=".*?">.*?<\/a>/ig,
//         matchExtractLable = /<a href="(.*?)">(.*?)<\/a>/,
//         matches = [],
//         replacementStrings = [];

//     matches =
//         args[0]
//             .match(matchAnchorTags);

//     replacementStrings =
//         matches
//             .map(m => {
//                 var match = m.match(matchExtractLable);
//                 return '[' + match[2] + '](' + match[1] + ')';
//             });

//     let len = matches.length;
//     for (let i = 0; i < len; i += 1) {
//         args[0] = args[0].replace(matches[i], replacementStrings[i]);
//     }

//     console.log(args[0]);
// }

function solve(args) {
    var regExTag = new RegExp('<a href="(.*?)">(.*?)</a>', "g");
   
    var newText = args[0].replace(regExTag, function (none, href, content) {
        
            return '[' + content + '](' + href + ')';      
    });

    console.log(newText);
}


// function solve(args) {
//   var output = '';
//   var openTag = String('<a href');
//   var closeTag = String('</a>');
//   var len = openTag.length;
//   // States
//   var isTag = false;
//   var curTag = '';
//   function ExtractURL() {
//     var parse = curTag;
//     var output = '';
//     var left = parse.indexOf('"');
//     var right = parse.indexOf('"', left + 1);
//     var URL = parse.substr(left + 1, right - (left + 1));
//     left = parse.indexOf('>', right + 1);
//     right = parse.indexOf('<', left + 1);
//     var label = parse.substr(left + 1, right - (left + 1));
//     output = '[' + label + '](' + URL + ')';
//     return output;
//   }
//   function ContainsCloseAnchor() {
//     var tag = curTag;
//     var index = tag.indexOf(closeTag);
//     if (index < 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   function IsAnchor() {
//     var tag = curTag;
//     if (tag.length < len) {
//       return false;
//     }
//     for (var index = 0; index < len; index += 1) {
//       if (tag[index] != openTag[index]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   function ReplaceTags(str) {
//     var parse = str + '';
//     var len = parse.length;
//     for (var index = 0; index < len; index += 1) {
//       var chr = parse[index];
//       if (chr === '<') {
//         isTag = true;
//         curTag += chr;
//       }
//       else if (chr === '>') {
//         curTag += chr;
//         // evaluate tag
//         if (IsAnchor()) {
//           if (ContainsCloseAnchor()) {
//             // Extract
//             output += ExtractURL();
//             isTag = false;
//             curTag = '';
//           } else {
//             // nothing
//           }
//         }
//         else {
//           output += curTag;
//           isTag = false;
//           curTag = '';
//         }
//       }
//       else if (isTag) {
//         curTag += chr;
//       }
//       else {
//         output += chr;
//       }
//     }
//     console.log(output);
//   }
//   ReplaceTags(args[0] + '')
// }