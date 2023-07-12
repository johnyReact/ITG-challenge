function cleanErrorMessages(errors: any) {
    return errors.map((error: string) => {
        // Find the position of ':' character in the string
        const colonIndex = error.indexOf(':');

        // If ':' character is found, remove everything before it and trim the result
        // Otherwise, return the original string
        if (colonIndex !== -1) {
            return error.slice(colonIndex + 1).trim();
        } else {
            return error;
        }
    });
}

export default cleanErrorMessages;