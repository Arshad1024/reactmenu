

var verticals = [
    {
        "Id": 1,
        "Name": "Health & Fitness"
    },
    {
        "Id": 2,
        "Name": "Business"
    },
    {
        "Id": 3,
        "Name": "Music"
    }
];

var categories = [
    {
        "Id": 1,
        "Name": "Booty & Abs",
        "Verticals": 1,
        "State": "active"
    },
    {
        "Id": 2,
        "Name": "Full Body",
        "Verticals": 1,
        "State": "active"
    },
    {
        "Id": 3,
        "Name": "Advertising",
        "Verticals": 2,
        "State": "active"
    },
    {
        "Id": 4,
        "Name": "Writing",
        "Verticals": 2,
        "State": "active"
    },
    {
        "Id": 5,
        "Name": "Singing",
        "Verticals": 3,
        "State": "active"
    },
    {
        "Id": 6,
        "Name": "Music Fundamentals",
        "Verticals": 3,
        "State": "active"
    }
];

var courses = [
    {
        "Id": 1,
        "Name": "Loose the Gutt, keep the Butt",
        "Author": "Anowa",
        "Categories": 1,
        "State": "active"
    },
    {
        "Id": 2,
        "Name": "BrittneBabe Fitness Transformation",
        "Author": "Brittnebabe",
        "Categories": 1,
        "State": "active"
    },
    {
        "Id": 3,
        "Name": "BTX: Body Transformation Extreme",
        "Author": "Barstarzz",
        "Categories": 2,
        "State": "active"
    },
    {
        "Id": 4,
        "Name": "Facebook Funnel Marketing",
        "Author": "Russell Brunson",
        "Categories": 2,
        "State": "active"
    },
    {
        "Id": 5,
        "Name": "Build a Wild Audience",
        "Author": "Tim Nilson",
        "Categories": 3,
        "State": "active"
    },
    {
        "Id": 6,
        "Name": "Editorial Writing Secrets",
        "Author": "J. K. Rowling",
        "Categories": 4,
        "State": "active"
    },
    {
        "Id": 7,
        "Name": "Scientific Writing",
        "Author": "Stephen Hawking",
        "Categories": 4,
        "State": "active"
    },
    {
        "Id": 8,
        "Name": "Vocal Training 101",
        "Author": "Linkin Park",
        "Categories": 5,
        "State": "active"
    },
    {
        "Id": 9,
        "Name": "Music Production",
        "Author": "Music Performance for Beginners",
        "Author": "Lady Gaga",
        "Categories": 5,
        "State": "active"
    },
    {
        "Id": 10,
        "Name": "Learn the Piano",
        "Author": "Lang Lang",
        "Categories": 6,
        "State": "active"
    },
    {
        "Id": 11,
        "Name": "Become a guitar hero",
        "Author": "Jimmy Page",
        "Categories": 6,
        "State": "active"
    }
];

// find data in array using value and key
function getElement(array, value, key) {
    return array.filter(key ? function (a) {
        return a[key] === value;
    } : function (a) {
        return Object.keys(a).some(function (k) {
            return a[k] === value;
        });
    });
}

// new output array
var data = [];


Object.keys(verticals).forEach(function(key){
    var temp = verticals[key];
    temp.children = getElement(categories,verticals[key].Id,"Verticals");
    Object.keys(temp.children).forEach(function(index){
        var cources = getElement(courses,temp.children[index].Id,"Categories");
        temp.children[index].children = cources;
    });
    data.push(temp);
});
