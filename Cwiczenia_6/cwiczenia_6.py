import riak

myClient = riak.RiakClient(pb_port=8087, protocol='pbc')
myBucket = myClient.bucket("s25545")

auctioneer = {"Name": "Michael", "Surname": "Corleone", "Highest_bidder": False}
myBucket.new(auctioneer["Name"], data=auctioneer).store()

fetchedAuctioneer = myBucket.get(auctioneer["Name"])
read = fetchedAuctioneer.data
print("Raw data: ", read)

fetchedAuctioneer.data["Highest_bidder"] = True
fetchedAuctioneer.store()

fetchedAuctioneer = myBucket.get(auctioneer["Name"])
read = fetchedAuctioneer.data
print("Edited data: ", read)

fetchedAuctioneer.delete()

fetchedAuctioneer = myBucket.get(auctioneer["Name"])
read = fetchedAuctioneer.data
print("Edited data: ", read)