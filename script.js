// Terminal element ko select kar rahe hain ID se - yaha messages display honge
const terminal = document.getElementById("terminal");

// Messages array - ye saare messages ek ek karke terminal pe dikhenge
const messages = [
  "Initializing hacking....",    // Pehla message - hacking start ho rahi hai
  "Reading your files...",        // File read kar rahe hain
  "Files detected",               // Files mil gayi
  "Password files detected",      // Password files bhi mil gayi
  "Sending all passwords and personal files to server",  // Data server pe bhej rahe hain (fake hai)
  "Cleaning up",                  // Cleanup kar rahe hain
];

// Delay function - time ka wait karne ke liye (milliseconds mein)
function delay(ms){
    // Promise return karta hai jo specified time ke baad resolve hota hai
    return new Promise(resolve => setTimeout(resolve,ms));
}

// Main function - terminal ko start karta hai (async hai kyunki await use kar rahe hain)
async function startTerminal() {
    // Loop chalega har message ke liye array mein se
    for(let msg of messages){
        // Terminal mein message add karo ">" ke saath aur new line
        terminal.innerHTML+=">"+ msg + "\n";
        // 1200 milliseconds (1.2 seconds) wait karo next message se pehle
        await delay(1200);
    }
    // Saare messages ke baad blinking cursor add karo
    terminal.innerHTML+="\n<span class='cursor'></span>";
}

// Function ko call karo - page load hote hi terminal start ho jayega
startTerminal()