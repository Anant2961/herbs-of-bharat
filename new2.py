import hashlib


def calculate_next_game_hash(current_game_hash):
    # Convert the current game hash from hexadecimal to bytes
    # current_game_hash_bytes = (current_game_hash)

    # Apply SHA-256 hashing algorithm to the bytes
    sha256_hash = hashlib.sha256(current_game_hash.encode("utf-8")).hexdigest()

    return sha256_hash


# Initial game hash (example)
initial_game_hash = 'aededcdd5add529385fb9f143b29c0c1c6087cd46a6d24bfd2f11c5066365183'

# Calculate the next game hash
next_game_hash = calculate_next_game_hash(initial_game_hash)
print(f'Next game hash: {next_game_hash}')

# Calculate the hash after the next one
hash_after_next = calculate_next_game_hash(next_game_hash)
print(f'Hash after next: {hash_after_next}')
